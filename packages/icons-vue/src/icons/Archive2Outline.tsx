// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive2OutlineSvg from '@ant-design/icons-svg/lib/asn/Archive2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive2Outline: Archive2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive2OutlineSvg}></AntdIcon>;
};

Archive2Outline.displayName = 'Archive2Outline';
Archive2Outline.inheritAttrs = false;
export default Archive2Outline;