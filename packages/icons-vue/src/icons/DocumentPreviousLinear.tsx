// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentPreviousLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentPreviousLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentPreviousLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentPreviousLinear: DocumentPreviousLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentPreviousLinearSvg}></AntdIcon>;
};

DocumentPreviousLinear.displayName = 'DocumentPreviousLinear';
DocumentPreviousLinear.inheritAttrs = false;
export default DocumentPreviousLinear;