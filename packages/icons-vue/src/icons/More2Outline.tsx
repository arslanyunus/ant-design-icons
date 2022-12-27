// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import More2OutlineSvg from '@ant-design/icons-svg/lib/asn/More2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface More2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const More2Outline: More2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={More2OutlineSvg}></AntdIcon>;
};

More2Outline.displayName = 'More2Outline';
More2Outline.inheritAttrs = false;
export default More2Outline;