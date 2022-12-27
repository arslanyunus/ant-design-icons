// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Archive2BoldSvg from '@ant-design/icons-svg/lib/asn/Archive2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Archive2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Archive2Bold: Archive2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Archive2BoldSvg}></AntdIcon>;
};

Archive2Bold.displayName = 'Archive2Bold';
Archive2Bold.inheritAttrs = false;
export default Archive2Bold;