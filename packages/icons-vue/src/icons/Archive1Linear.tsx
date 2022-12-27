// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive1LinearSvg from '@ant-design/icons-svg/lib/asn/Archive1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive1Linear: Archive1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive1LinearSvg}></AntdIcon>;
};

Archive1Linear.displayName = 'Archive1Linear';
Archive1Linear.inheritAttrs = false;
export default Archive1Linear;