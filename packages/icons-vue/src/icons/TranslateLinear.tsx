// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TranslateLinearSvg from '@ant-design/icons-svg/lib/asn/TranslateLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TranslateLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TranslateLinear: TranslateLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslateLinearSvg}></AntdIcon>;
};

TranslateLinear.displayName = 'TranslateLinear';
TranslateLinear.inheritAttrs = false;
export default TranslateLinear;