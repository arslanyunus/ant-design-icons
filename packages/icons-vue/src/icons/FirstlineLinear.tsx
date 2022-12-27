// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FirstlineLinearSvg from '@ant-design/icons-svg/lib/asn/FirstlineLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FirstlineLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FirstlineLinear: FirstlineLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FirstlineLinearSvg}></AntdIcon>;
};

FirstlineLinear.displayName = 'FirstlineLinear';
FirstlineLinear.inheritAttrs = false;
export default FirstlineLinear;