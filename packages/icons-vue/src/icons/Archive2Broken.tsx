// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive2BrokenSvg from '@ant-design/icons-svg/lib/asn/Archive2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive2Broken: Archive2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive2BrokenSvg}></AntdIcon>;
};

Archive2Broken.displayName = 'Archive2Broken';
Archive2Broken.inheritAttrs = false;
export default Archive2Broken;