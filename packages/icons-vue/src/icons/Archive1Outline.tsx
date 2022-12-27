// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive1OutlineSvg from '@ant-design/icons-svg/lib/asn/Archive1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive1Outline: Archive1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive1OutlineSvg}></AntdIcon>;
};

Archive1Outline.displayName = 'Archive1Outline';
Archive1Outline.inheritAttrs = false;
export default Archive1Outline;