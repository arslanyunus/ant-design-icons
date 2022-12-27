// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt21LinearSvg from '@ant-design/icons-svg/lib/asn/Receipt21Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt21LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt21Linear: Receipt21LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt21LinearSvg}></AntdIcon>;
};

Receipt21Linear.displayName = 'Receipt21Linear';
Receipt21Linear.inheritAttrs = false;
export default Receipt21Linear;