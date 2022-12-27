// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/RefreshCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshCircleBroken: RefreshCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshCircleBrokenSvg}></AntdIcon>;
};

RefreshCircleBroken.displayName = 'RefreshCircleBroken';
RefreshCircleBroken.inheritAttrs = false;
export default RefreshCircleBroken;