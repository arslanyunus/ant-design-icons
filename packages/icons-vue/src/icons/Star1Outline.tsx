// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Star1OutlineSvg from '@ant-design/icons-svg/lib/asn/Star1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Star1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Star1Outline: Star1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Star1OutlineSvg}></AntdIcon>;
};

Star1Outline.displayName = 'Star1Outline';
Star1Outline.inheritAttrs = false;
export default Star1Outline;