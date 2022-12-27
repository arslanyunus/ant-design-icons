// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame3LinearSvg from '@ant-design/icons-svg/lib/asn/Frame3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame3Linear: Frame3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame3LinearSvg}></AntdIcon>;
};

Frame3Linear.displayName = 'Frame3Linear';
Frame3Linear.inheritAttrs = false;
export default Frame3Linear;