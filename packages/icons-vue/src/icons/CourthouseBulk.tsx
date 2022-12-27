// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CourthouseBulkSvg from '@ant-design/icons-svg/lib/asn/CourthouseBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CourthouseBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CourthouseBulk: CourthouseBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CourthouseBulkSvg}></AntdIcon>;
};

CourthouseBulk.displayName = 'CourthouseBulk';
CourthouseBulk.inheritAttrs = false;
export default CourthouseBulk;