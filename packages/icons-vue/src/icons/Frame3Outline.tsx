// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame3OutlineSvg from '@ant-design/icons-svg/lib/asn/Frame3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame3Outline: Frame3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame3OutlineSvg}></AntdIcon>;
};

Frame3Outline.displayName = 'Frame3Outline';
Frame3Outline.inheritAttrs = false;
export default Frame3Outline;