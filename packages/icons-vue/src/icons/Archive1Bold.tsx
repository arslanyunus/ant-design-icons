// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive1BoldSvg from '@ant-design/icons-svg/lib/asn/Archive1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive1Bold: Archive1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive1BoldSvg}></AntdIcon>;
};

Archive1Bold.displayName = 'Archive1Bold';
Archive1Bold.inheritAttrs = false;
export default Archive1Bold;