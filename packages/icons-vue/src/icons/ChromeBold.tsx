// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChromeBoldSvg from '@ant-design/icons-svg/lib/asn/ChromeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChromeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChromeBold: ChromeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeBoldSvg}></AntdIcon>;
};

ChromeBold.displayName = 'ChromeBold';
ChromeBold.inheritAttrs = false;
export default ChromeBold;