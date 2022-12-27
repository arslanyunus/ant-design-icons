// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame2LinearSvg from '@ant-design/icons-svg/lib/asn/Frame2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame2Linear: Frame2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame2LinearSvg}></AntdIcon>;
};

Frame2Linear.displayName = 'Frame2Linear';
Frame2Linear.inheritAttrs = false;
export default Frame2Linear;