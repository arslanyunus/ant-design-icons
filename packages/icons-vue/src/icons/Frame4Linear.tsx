// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame4LinearSvg from '@ant-design/icons-svg/lib/asn/Frame4Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame4LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame4Linear: Frame4LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame4LinearSvg}></AntdIcon>;
};

Frame4Linear.displayName = 'Frame4Linear';
Frame4Linear.inheritAttrs = false;
export default Frame4Linear;