// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame1LinearSvg from '@ant-design/icons-svg/lib/asn/Frame1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame1Linear: Frame1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame1LinearSvg}></AntdIcon>;
};

Frame1Linear.displayName = 'Frame1Linear';
Frame1Linear.inheritAttrs = false;
export default Frame1Linear;