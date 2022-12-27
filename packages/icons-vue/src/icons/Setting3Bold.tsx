// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting3BoldSvg from '@ant-design/icons-svg/lib/asn/Setting3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting3Bold: Setting3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting3BoldSvg}></AntdIcon>;
};

Setting3Bold.displayName = 'Setting3Bold';
Setting3Bold.inheritAttrs = false;
export default Setting3Bold;