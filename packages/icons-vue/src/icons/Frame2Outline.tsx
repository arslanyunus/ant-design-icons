// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame2OutlineSvg from '@ant-design/icons-svg/lib/asn/Frame2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame2Outline: Frame2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame2OutlineSvg}></AntdIcon>;
};

Frame2Outline.displayName = 'Frame2Outline';
Frame2Outline.inheritAttrs = false;
export default Frame2Outline;