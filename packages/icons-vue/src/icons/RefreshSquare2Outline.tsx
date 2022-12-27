// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshSquare2OutlineSvg from '@ant-design/icons-svg/lib/asn/RefreshSquare2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshSquare2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshSquare2Outline: RefreshSquare2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshSquare2OutlineSvg}></AntdIcon>;
};

RefreshSquare2Outline.displayName = 'RefreshSquare2Outline';
RefreshSquare2Outline.inheritAttrs = false;
export default RefreshSquare2Outline;