// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TranslateOutlineSvg from '@ant-design/icons-svg/lib/asn/TranslateOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TranslateOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TranslateOutline: TranslateOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslateOutlineSvg}></AntdIcon>;
};

TranslateOutline.displayName = 'TranslateOutline';
TranslateOutline.inheritAttrs = false;
export default TranslateOutline;