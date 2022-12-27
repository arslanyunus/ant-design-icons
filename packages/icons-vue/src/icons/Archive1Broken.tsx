// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive1BrokenSvg from '@ant-design/icons-svg/lib/asn/Archive1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive1Broken: Archive1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive1BrokenSvg}></AntdIcon>;
};

Archive1Broken.displayName = 'Archive1Broken';
Archive1Broken.inheritAttrs = false;
export default Archive1Broken;