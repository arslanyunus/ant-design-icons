// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshSquare2LinearSvg from '@ant-design/icons-svg/lib/asn/RefreshSquare2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshSquare2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshSquare2Linear: RefreshSquare2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshSquare2LinearSvg}></AntdIcon>;
};

RefreshSquare2Linear.displayName = 'RefreshSquare2Linear';
RefreshSquare2Linear.inheritAttrs = false;
export default RefreshSquare2Linear;