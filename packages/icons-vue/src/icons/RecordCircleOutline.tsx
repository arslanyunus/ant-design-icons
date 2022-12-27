// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/RecordCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordCircleOutline: RecordCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordCircleOutlineSvg}></AntdIcon>;
};

RecordCircleOutline.displayName = 'RecordCircleOutline';
RecordCircleOutline.inheritAttrs = false;
export default RecordCircleOutline;