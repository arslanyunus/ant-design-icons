// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShopRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopRemoveTwoTone: ShopRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopRemoveTwoToneSvg}></AntdIcon>;
};

ShopRemoveTwoTone.displayName = 'ShopRemoveTwoTone';
ShopRemoveTwoTone.inheritAttrs = false;
export default ShopRemoveTwoTone;