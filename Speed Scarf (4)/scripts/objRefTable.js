const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Spritefont2,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.gamepad,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.TiledBg.Cnds.CompareX,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.ScriptsInEvents.Floresta_Event14_Act3,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Audio.Acts.Stop,
		C3.ScriptsInEvents.Floresta_Event19,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.gamepad.Cnds.OnButtonDown,
		C3.Plugins.Audio.Acts.StopAll
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos3: 0},
	{Plataforma: 0},
	{Zippy: 0},
	{Titulo: 0},
	{Sprite: 0},
	{Teclado: 0},
	{Mouse: 0},
	{PlanoDeFundoEmBlocos: 0},
	{Sprite2: 0},
	{freepik__pixelartlogoforthegamespeedscarffeaturinga__65434__1_removebgpreview: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{Sprite3: 0},
	{Sólido: 0},
	{GroundBox: 0},
	{Sprite4: 0},
	{ZippyTitulo: 0},
	{Inimigos: 0},
	{Destruidor: 0},
	{Texto: 0},
	{PlanoDeFundoEmBlocos6: 0},
	{Texto2: 0},
	{ZippyGameOver: 0},
	{Texto3: 0},
	{Áudio: 0},
	{FonteDeSprites: 0},
	{Toque: 0},
	{Gamepad: 0},
	{BackgroundMovement: 0},
	{GroundMovement: 0},
	{Score: 0},
	{estaMorto: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	Zippy: class extends self.ISpriteInstance {},
	Titulo: class extends self.ISpriteFontInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	freepik__pixelartlogoforthegamespeedscarffeaturinga__65434__1_removebgpreview: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	GroundBox: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	ZippyTitulo: class extends self.ISpriteInstance {},
	Inimigos: class extends self.ISpriteInstance {},
	Destruidor: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	PlanoDeFundoEmBlocos6: class extends self.ITiledBackgroundInstance {},
	Texto2: class extends self.ITextInstance {},
	ZippyGameOver: class extends self.ISpriteInstance {},
	Texto3: class extends self.ITextInstance {},
	Áudio: class extends self.IInstance {},
	FonteDeSprites: class extends self.ISpriteFontInstance {},
	Toque: class extends self.IInstance {},
	Gamepad: class extends self.IInstance {}
}