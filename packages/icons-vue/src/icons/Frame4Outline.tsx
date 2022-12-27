// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame4OutlineSvg from '@ant-design/icons-svg/lib/asn/Frame4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame4Outline: Frame4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame4OutlineSvg}></AntdIcon>;
};

Frame4Outline.displayName = 'Frame4Outline';
Frame4Outline.inheritAttrs = false;
export default Frame4Outline;