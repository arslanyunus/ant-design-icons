// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward10SecondsLinearSvg from '@ant-design/icons-svg/lib/asn/Forward10SecondsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward10SecondsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward10SecondsLinear: Forward10SecondsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward10SecondsLinearSvg}></AntdIcon>;
};

Forward10SecondsLinear.displayName = 'Forward10SecondsLinear';
Forward10SecondsLinear.inheritAttrs = false;
export default Forward10SecondsLinear;