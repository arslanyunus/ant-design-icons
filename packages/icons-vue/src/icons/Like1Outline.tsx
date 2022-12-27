// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Like1OutlineSvg from '@ant-design/icons-svg/lib/asn/Like1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Like1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Like1Outline: Like1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Like1OutlineSvg}></AntdIcon>;
};

Like1Outline.displayName = 'Like1Outline';
Like1Outline.inheritAttrs = false;
export default Like1Outline;