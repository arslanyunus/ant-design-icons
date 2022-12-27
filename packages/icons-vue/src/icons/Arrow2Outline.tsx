// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow2OutlineSvg from '@ant-design/icons-svg/lib/asn/Arrow2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow2Outline: Arrow2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow2OutlineSvg}></AntdIcon>;
};

Arrow2Outline.displayName = 'Arrow2Outline';
Arrow2Outline.inheritAttrs = false;
export default Arrow2Outline;