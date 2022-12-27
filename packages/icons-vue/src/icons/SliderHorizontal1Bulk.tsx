// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontal1BulkSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontal1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontal1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontal1Bulk: SliderHorizontal1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontal1BulkSvg}></AntdIcon>;
};

SliderHorizontal1Bulk.displayName = 'SliderHorizontal1Bulk';
SliderHorizontal1Bulk.inheritAttrs = false;
export default SliderHorizontal1Bulk;