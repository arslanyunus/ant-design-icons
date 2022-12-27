// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlarmBulkSvg from '@ant-design/icons-svg/lib/asn/AlarmBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlarmBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlarmBulk: AlarmBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmBulkSvg}></AntdIcon>;
};

AlarmBulk.displayName = 'AlarmBulk';
AlarmBulk.inheritAttrs = false;
export default AlarmBulk;