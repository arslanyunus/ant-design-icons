// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame2BoldSvg from '@ant-design/icons-svg/lib/asn/Frame2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame2Bold: Frame2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame2BoldSvg}></AntdIcon>;
};

Frame2Bold.displayName = 'Frame2Bold';
Frame2Bold.inheritAttrs = false;
export default Frame2Bold;