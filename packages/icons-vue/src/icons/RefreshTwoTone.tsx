// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshTwoToneSvg from '@ant-design/icons-svg/lib/asn/RefreshTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshTwoTone: RefreshTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshTwoToneSvg}></AntdIcon>;
};

RefreshTwoTone.displayName = 'RefreshTwoTone';
RefreshTwoTone.inheritAttrs = false;
export default RefreshTwoTone;