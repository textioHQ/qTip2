/// <reference types="jquery" />
/// <reference types="qtip2" />

declare module '@textio/qtip2' {
    interface TooltipRect {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }

    interface ApiElements {
        target: JQuery;
        tooltip?: JQuery;
        titleBar?: JQuery;
        title?: JQuery;
        button?: JQuery;
        content?: JQuery;
        tip?: JQuery;
    }

    interface PositionDontUse extends QTip2.Position {
        target?: any;
    }
    interface Position extends PositionDontUse {
        target?: QTip2.Target | boolean | TooltipRect;
    }

    export interface QTipApi extends QTip2.Api {
        rendered: boolean;
        id: string;
        elements: ApiElements;
    }

    interface QTipOptionsDontUse extends QTip2.QTipOptions {
        position?: any;
    }
    export interface QTipOptions extends QTipOptionsDontUse {
        style?: QTip2.Style;
        position?: string | Position;
    }
}
