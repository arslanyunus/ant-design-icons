// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting4BrokenSvg from '@ant-design/icons-svg/lib/asn/Setting4Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting4BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting4Broken: Setting4BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting4BrokenSvg}></AntdIcon>;
};

Setting4Broken.displayName = 'Setting4Broken';
Setting4Broken.inheritAttrs = false;
export default Setting4Broken;