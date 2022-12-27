// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt1BrokenSvg from '@ant-design/icons-svg/lib/asn/Receipt1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt1Broken: Receipt1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt1BrokenSvg}></AntdIcon>;
};

Receipt1Broken.displayName = 'Receipt1Broken';
Receipt1Broken.inheritAttrs = false;
export default Receipt1Broken;