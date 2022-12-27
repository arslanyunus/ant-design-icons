// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatBulkSvg from '@ant-design/icons-svg/lib/asn/RepeatBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatBulk: RepeatBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatBulkSvg}></AntdIcon>;
};

RepeatBulk.displayName = 'RepeatBulk';
RepeatBulk.inheritAttrs = false;
export default RepeatBulk;