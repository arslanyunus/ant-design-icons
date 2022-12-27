// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateOneBulkSvg from '@ant-design/icons-svg/lib/asn/RepeateOneBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateOneBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateOneBulk: RepeateOneBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateOneBulkSvg}></AntdIcon>;
};

RepeateOneBulk.displayName = 'RepeateOneBulk';
RepeateOneBulk.inheritAttrs = false;
export default RepeateOneBulk;