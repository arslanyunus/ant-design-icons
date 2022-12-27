// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshSquare2BoldSvg from '@ant-design/icons-svg/lib/asn/RefreshSquare2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshSquare2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshSquare2Bold: RefreshSquare2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshSquare2BoldSvg}></AntdIcon>;
};

RefreshSquare2Bold.displayName = 'RefreshSquare2Bold';
RefreshSquare2Bold.inheritAttrs = false;
export default RefreshSquare2Bold;