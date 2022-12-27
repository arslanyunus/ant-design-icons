// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoteBulkSvg from '@ant-design/icons-svg/lib/asn/NoteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NoteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NoteBulk: NoteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NoteBulkSvg}></AntdIcon>;
};

NoteBulk.displayName = 'NoteBulk';
NoteBulk.inheritAttrs = false;
export default NoteBulk;