namespace $ {

	/**
	 * Join strings in snake_case.
	 *
	 * 	// 'foo_bar_wee'
	 * 	$mol_type_case_snake< [ 'foo', 'bar', 'wee' ] >
	 */
	export type $mol_type_case_snake< Parts extends Array< string > > =
		$mol_type_string_join< Parts, '_' >

	/**
	 * Join strings in kebab-case.
	 *
	 * 	// 'foo-bar-wee'
	 * 	$mol_type_case_kebab< [ 'foo', 'bar', 'wee' ] >
	 */
	export type $mol_type_case_kebab< Parts extends Array< string > > =
		$mol_type_string_join< Parts, '-' >

}
