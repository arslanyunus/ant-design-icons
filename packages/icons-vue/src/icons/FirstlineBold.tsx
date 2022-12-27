// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FirstlineBoldSvg from '@ant-design/icons-svg/lib/asn/FirstlineBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FirstlineBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FirstlineBold: FirstlineBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FirstlineBoldSvg}></AntdIcon>;
};

FirstlineBold.displayName = 'FirstlineBold';
FirstlineBold.inheritAttrs = false;
export default FirstlineBold;