// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshSquare2BrokenSvg from '@ant-design/icons-svg/lib/asn/RefreshSquare2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshSquare2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshSquare2Broken: RefreshSquare2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshSquare2BrokenSvg}></AntdIcon>;
};

RefreshSquare2Broken.displayName = 'RefreshSquare2Broken';
RefreshSquare2Broken.inheritAttrs = false;
export default RefreshSquare2Broken;