// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RefreshCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshCircleTwoTone: RefreshCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshCircleTwoToneSvg}></AntdIcon>;
};

RefreshCircleTwoTone.displayName = 'RefreshCircleTwoTone';
RefreshCircleTwoTone.inheritAttrs = false;
export default RefreshCircleTwoTone;