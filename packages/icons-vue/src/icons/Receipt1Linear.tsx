// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt1LinearSvg from '@ant-design/icons-svg/lib/asn/Receipt1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt1Linear: Receipt1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt1LinearSvg}></AntdIcon>;
};

Receipt1Linear.displayName = 'Receipt1Linear';
Receipt1Linear.inheritAttrs = false;
export default Receipt1Linear;