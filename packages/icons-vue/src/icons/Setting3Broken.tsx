// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting3BrokenSvg from '@ant-design/icons-svg/lib/asn/Setting3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting3Broken: Setting3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting3BrokenSvg}></AntdIcon>;
};

Setting3Broken.displayName = 'Setting3Broken';
Setting3Broken.inheritAttrs = false;
export default Setting3Broken;