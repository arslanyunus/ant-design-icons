// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChromeBrokenSvg from '@ant-design/icons-svg/lib/asn/ChromeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChromeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChromeBroken: ChromeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeBrokenSvg}></AntdIcon>;
};

ChromeBroken.displayName = 'ChromeBroken';
ChromeBroken.inheritAttrs = false;
export default ChromeBroken;