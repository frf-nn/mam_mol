namespace $ {
	$mol_test({
		
		'Default state'() {
			
			const val = new $mol_crowd_reg()
			
			$mol_assert_like( val.toJSON(), [] )
			$mol_assert_like( val.value, null )
			$mol_assert_like( val.stamp, 0 )
			
		},
		
		'Serial changes'() {
			
			$mol_assert_like(
				new $mol_crowd_reg().fork(1).put( 'foo' ).put( 'bar' ).toJSON(),
				[[ 'bar', +2001 ]],
			)
			
		},
		
		'Slice after version'() {
			
			const val = new $mol_crowd_reg().fork(1).put( 'foo' ).put( 'bar' )

			$mol_assert_like( val.toJSON( +1001 ), [
				[ 'bar', +2001 ],
			] )
			
			$mol_assert_like( val.toJSON( +2001 ), [] )
			
		},
		
		'Cuncurrent changes'() {
			
			const base = new $mol_crowd_reg().fork(1).put( 'foo' )
			
			const left = base.fork(2).put( 'bar' )
			const right = base.fork(3).put( 'xxx' )
			
			const left_event = left.delta( base )
			const right_event = right.delta( base )
			
			$mol_assert_like(
				left.apply( right_event ).toJSON(),
				right.apply( left_event ).toJSON(),
				[[ 'xxx', +2003 ]],
			)
			
		},
		
	})
}
