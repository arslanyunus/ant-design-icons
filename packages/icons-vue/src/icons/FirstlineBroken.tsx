// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FirstlineBrokenSvg from '@ant-design/icons-svg/lib/asn/FirstlineBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FirstlineBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FirstlineBroken: FirstlineBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FirstlineBrokenSvg}></AntdIcon>;
};

FirstlineBroken.displayName = 'FirstlineBroken';
FirstlineBroken.inheritAttrs = false;
export default FirstlineBroken;