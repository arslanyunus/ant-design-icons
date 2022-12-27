// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting5BrokenSvg from '@ant-design/icons-svg/lib/asn/Setting5Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting5BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting5Broken: Setting5BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting5BrokenSvg}></AntdIcon>;
};

Setting5Broken.displayName = 'Setting5Broken';
Setting5Broken.inheritAttrs = false;
export default Setting5Broken;